import React from 'react';
const LABEL_41303 = 'component_41303';
export function Component41303({ value = 41303, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41303, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41303, 'data-value': derived.doubled }, children);
}
export default Component41303;
