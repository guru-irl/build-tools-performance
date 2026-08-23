import React from 'react';
const LABEL_41796 = 'component_41796';
export function Component41796({ value = 41796, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41796, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41796, 'data-value': derived.doubled }, children);
}
export default Component41796;
