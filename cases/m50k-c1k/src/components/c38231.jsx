import React from 'react';
const LABEL_38231 = 'component_38231';
export function Component38231({ value = 38231, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38231, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38231, 'data-value': derived.doubled }, children);
}
export default Component38231;
