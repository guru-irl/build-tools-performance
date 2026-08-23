import React from 'react';
const LABEL_41386 = 'component_41386';
export function Component41386({ value = 41386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41386, 'data-value': derived.doubled }, children);
}
export default Component41386;
