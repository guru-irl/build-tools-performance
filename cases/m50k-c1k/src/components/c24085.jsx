import React from 'react';
const LABEL_24085 = 'component_24085';
export function Component24085({ value = 24085, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24085, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24085, 'data-value': derived.doubled }, children);
}
export default Component24085;
