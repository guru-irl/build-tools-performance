import React from 'react';
const LABEL_24394 = 'component_24394';
export function Component24394({ value = 24394, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24394, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24394, 'data-value': derived.doubled }, children);
}
export default Component24394;
