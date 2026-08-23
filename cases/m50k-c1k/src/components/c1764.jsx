import React from 'react';
const LABEL_1764 = 'component_1764';
export function Component1764({ value = 1764, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1764, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1764, 'data-value': derived.doubled }, children);
}
export default Component1764;
