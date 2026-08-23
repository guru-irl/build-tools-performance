import React from 'react';
const LABEL_38344 = 'component_38344';
export function Component38344({ value = 38344, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38344, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38344, 'data-value': derived.doubled }, children);
}
export default Component38344;
