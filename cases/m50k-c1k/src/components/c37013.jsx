import React from 'react';
const LABEL_37013 = 'component_37013';
export function Component37013({ value = 37013, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37013, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37013, 'data-value': derived.doubled }, children);
}
export default Component37013;
