import React from 'react';
const LABEL_11195 = 'component_11195';
export function Component11195({ value = 11195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11195, 'data-value': derived.doubled }, children);
}
export default Component11195;
