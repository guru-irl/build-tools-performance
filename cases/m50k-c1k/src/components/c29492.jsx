import React from 'react';
const LABEL_29492 = 'component_29492';
export function Component29492({ value = 29492, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29492, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29492, 'data-value': derived.doubled }, children);
}
export default Component29492;
