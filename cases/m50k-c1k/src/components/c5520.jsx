import React from 'react';
const LABEL_5520 = 'component_5520';
export function Component5520({ value = 5520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5520, 'data-value': derived.doubled }, children);
}
export default Component5520;
