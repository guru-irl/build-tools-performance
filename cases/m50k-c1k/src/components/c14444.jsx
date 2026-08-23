import React from 'react';
const LABEL_14444 = 'component_14444';
export function Component14444({ value = 14444, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14444, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14444, 'data-value': derived.doubled }, children);
}
export default Component14444;
