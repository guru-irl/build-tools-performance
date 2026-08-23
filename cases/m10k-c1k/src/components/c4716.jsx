import React from 'react';
const LABEL_4716 = 'component_4716';
export function Component4716({ value = 4716, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4716, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4716, 'data-value': derived.doubled }, children);
}
export default Component4716;
