import React from 'react';
const LABEL_41851 = 'component_41851';
export function Component41851({ value = 41851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41851, 'data-value': derived.doubled }, children);
}
export default Component41851;
