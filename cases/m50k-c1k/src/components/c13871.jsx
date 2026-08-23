import React from 'react';
const LABEL_13871 = 'component_13871';
export function Component13871({ value = 13871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13871, 'data-value': derived.doubled }, children);
}
export default Component13871;
