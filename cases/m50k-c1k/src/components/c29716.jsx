import React from 'react';
const LABEL_29716 = 'component_29716';
export function Component29716({ value = 29716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29716, 'data-value': derived.doubled }, children);
}
export default Component29716;
