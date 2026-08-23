import React from 'react';
const LABEL_4902 = 'component_4902';
export function Component4902({ value = 4902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4902, 'data-value': derived.doubled }, children);
}
export default Component4902;
