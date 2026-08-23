import React from 'react';
const LABEL_41963 = 'component_41963';
export function Component41963({ value = 41963, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41963, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41963, 'data-value': derived.doubled }, children);
}
export default Component41963;
