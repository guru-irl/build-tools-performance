import React from 'react';
const LABEL_42770 = 'component_42770';
export function Component42770({ value = 42770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42770, 'data-value': derived.doubled }, children);
}
export default Component42770;
