import React from 'react';
const LABEL_36716 = 'component_36716';
export function Component36716({ value = 36716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36716, 'data-value': derived.doubled }, children);
}
export default Component36716;
