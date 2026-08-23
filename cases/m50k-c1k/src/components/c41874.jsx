import React from 'react';
const LABEL_41874 = 'component_41874';
export function Component41874({ value = 41874, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41874, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41874, 'data-value': derived.doubled }, children);
}
export default Component41874;
