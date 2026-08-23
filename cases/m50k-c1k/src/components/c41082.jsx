import React from 'react';
const LABEL_41082 = 'component_41082';
export function Component41082({ value = 41082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41082, 'data-value': derived.doubled }, children);
}
export default Component41082;
