import React from 'react';
const LABEL_570 = 'component_570';
export function Component570({ value = 570, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_570, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_570, 'data-value': derived.doubled }, children);
}
export default Component570;
