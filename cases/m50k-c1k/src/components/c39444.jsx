import React from 'react';
const LABEL_39444 = 'component_39444';
export function Component39444({ value = 39444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39444, 'data-value': derived.doubled }, children);
}
export default Component39444;
