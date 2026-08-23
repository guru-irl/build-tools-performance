import React from 'react';
const LABEL_1082 = 'component_1082';
export function Component1082({ value = 1082, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1082, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1082, 'data-value': derived.doubled }, children);
}
export default Component1082;
