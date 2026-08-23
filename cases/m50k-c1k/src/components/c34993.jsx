import React from 'react';
const LABEL_34993 = 'component_34993';
export function Component34993({ value = 34993, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34993, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34993, 'data-value': derived.doubled }, children);
}
export default Component34993;
