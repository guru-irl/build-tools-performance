import React from 'react';
const LABEL_40770 = 'component_40770';
export function Component40770({ value = 40770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40770, 'data-value': derived.doubled }, children);
}
export default Component40770;
