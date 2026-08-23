import React from 'react';
const LABEL_5044 = 'component_5044';
export function Component5044({ value = 5044, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5044, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5044, 'data-value': derived.doubled }, children);
}
export default Component5044;
