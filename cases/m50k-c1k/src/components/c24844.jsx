import React from 'react';
const LABEL_24844 = 'component_24844';
export function Component24844({ value = 24844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24844, 'data-value': derived.doubled }, children);
}
export default Component24844;
