import React from 'react';
const LABEL_29320 = 'component_29320';
export function Component29320({ value = 29320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29320, 'data-value': derived.doubled }, children);
}
export default Component29320;
