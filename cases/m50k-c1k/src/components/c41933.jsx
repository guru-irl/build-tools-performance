import React from 'react';
const LABEL_41933 = 'component_41933';
export function Component41933({ value = 41933, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41933, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41933, 'data-value': derived.doubled }, children);
}
export default Component41933;
