import React from 'react';
const LABEL_43716 = 'component_43716';
export function Component43716({ value = 43716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43716, 'data-value': derived.doubled }, children);
}
export default Component43716;
