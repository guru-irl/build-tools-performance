import React from 'react';
const LABEL_19298 = 'component_19298';
export function Component19298({ value = 19298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19298, 'data-value': derived.doubled }, children);
}
export default Component19298;
