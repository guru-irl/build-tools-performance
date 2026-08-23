import React from 'react';
const LABEL_25301 = 'component_25301';
export function Component25301({ value = 25301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25301, 'data-value': derived.doubled }, children);
}
export default Component25301;
