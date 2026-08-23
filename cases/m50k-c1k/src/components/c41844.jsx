import React from 'react';
const LABEL_41844 = 'component_41844';
export function Component41844({ value = 41844, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41844, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41844, 'data-value': derived.doubled }, children);
}
export default Component41844;
