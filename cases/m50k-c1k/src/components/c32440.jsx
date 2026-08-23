import React from 'react';
const LABEL_32440 = 'component_32440';
export function Component32440({ value = 32440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32440, 'data-value': derived.doubled }, children);
}
export default Component32440;
