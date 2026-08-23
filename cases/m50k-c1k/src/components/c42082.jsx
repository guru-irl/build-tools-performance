import React from 'react';
const LABEL_42082 = 'component_42082';
export function Component42082({ value = 42082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42082, 'data-value': derived.doubled }, children);
}
export default Component42082;
