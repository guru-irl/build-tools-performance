import React from 'react';
const LABEL_7386 = 'component_7386';
export function Component7386({ value = 7386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7386, 'data-value': derived.doubled }, children);
}
export default Component7386;
