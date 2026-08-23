import React from 'react';
const LABEL_10386 = 'component_10386';
export function Component10386({ value = 10386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10386, 'data-value': derived.doubled }, children);
}
export default Component10386;
