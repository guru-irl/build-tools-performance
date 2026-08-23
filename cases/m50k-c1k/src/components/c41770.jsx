import React from 'react';
const LABEL_41770 = 'component_41770';
export function Component41770({ value = 41770, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41770, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41770, 'data-value': derived.doubled }, children);
}
export default Component41770;
