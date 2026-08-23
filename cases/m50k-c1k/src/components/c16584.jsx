import React from 'react';
const LABEL_16584 = 'component_16584';
export function Component16584({ value = 16584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16584, 'data-value': derived.doubled }, children);
}
export default Component16584;
