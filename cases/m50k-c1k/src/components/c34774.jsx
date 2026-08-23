import React from 'react';
const LABEL_34774 = 'component_34774';
export function Component34774({ value = 34774, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34774, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34774, 'data-value': derived.doubled }, children);
}
export default Component34774;
