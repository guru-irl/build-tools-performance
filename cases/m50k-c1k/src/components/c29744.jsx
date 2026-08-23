import React from 'react';
const LABEL_29744 = 'component_29744';
export function Component29744({ value = 29744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29744, 'data-value': derived.doubled }, children);
}
export default Component29744;
