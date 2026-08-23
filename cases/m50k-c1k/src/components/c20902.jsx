import React from 'react';
const LABEL_20902 = 'component_20902';
export function Component20902({ value = 20902, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20902, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20902, 'data-value': derived.doubled }, children);
}
export default Component20902;
