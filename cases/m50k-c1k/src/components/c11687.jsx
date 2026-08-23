import React from 'react';
const LABEL_11687 = 'component_11687';
export function Component11687({ value = 11687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11687, 'data-value': derived.doubled }, children);
}
export default Component11687;
