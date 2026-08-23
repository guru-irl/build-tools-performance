import React from 'react';
const LABEL_24224 = 'component_24224';
export function Component24224({ value = 24224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24224, 'data-value': derived.doubled }, children);
}
export default Component24224;
