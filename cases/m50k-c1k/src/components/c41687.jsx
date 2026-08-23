import React from 'react';
const LABEL_41687 = 'component_41687';
export function Component41687({ value = 41687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41687, 'data-value': derived.doubled }, children);
}
export default Component41687;
