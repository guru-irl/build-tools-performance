import React from 'react';
const LABEL_24615 = 'component_24615';
export function Component24615({ value = 24615, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24615, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24615, 'data-value': derived.doubled }, children);
}
export default Component24615;
