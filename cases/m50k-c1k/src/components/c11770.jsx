import React from 'react';
const LABEL_11770 = 'component_11770';
export function Component11770({ value = 11770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11770, 'data-value': derived.doubled }, children);
}
export default Component11770;
