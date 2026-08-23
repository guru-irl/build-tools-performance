import React from 'react';
const LABEL_41302 = 'component_41302';
export function Component41302({ value = 41302, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41302, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41302, 'data-value': derived.doubled }, children);
}
export default Component41302;
