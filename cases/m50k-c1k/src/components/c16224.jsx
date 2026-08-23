import React from 'react';
const LABEL_16224 = 'component_16224';
export function Component16224({ value = 16224, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16224, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16224, 'data-value': derived.doubled }, children);
}
export default Component16224;
