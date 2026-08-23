import React from 'react';
const LABEL_13204 = 'component_13204';
export function Component13204({ value = 13204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13204, 'data-value': derived.doubled }, children);
}
export default Component13204;
