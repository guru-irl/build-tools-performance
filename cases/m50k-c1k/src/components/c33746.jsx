import React from 'react';
const LABEL_33746 = 'component_33746';
export function Component33746({ value = 33746, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33746, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33746, 'data-value': derived.doubled }, children);
}
export default Component33746;
