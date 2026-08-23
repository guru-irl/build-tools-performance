import React from 'react';
const LABEL_40441 = 'component_40441';
export function Component40441({ value = 40441, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40441, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40441, 'data-value': derived.doubled }, children);
}
export default Component40441;
