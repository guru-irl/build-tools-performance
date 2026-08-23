import React from 'react';
const LABEL_20721 = 'component_20721';
export function Component20721({ value = 20721, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20721, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20721, 'data-value': derived.doubled }, children);
}
export default Component20721;
