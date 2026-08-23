import React from 'react';
const LABEL_15770 = 'component_15770';
export function Component15770({ value = 15770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15770, 'data-value': derived.doubled }, children);
}
export default Component15770;
